import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocale } from "../i18n/useLocale";

interface PDFModalProps {
	isOpen: boolean;
	onClose: () => void;
	pdfUrl: string;
	title: string;
}

export default function PDFModal({ isOpen, onClose, pdfUrl, title }: PDFModalProps) {
	const { t } = useLocale();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	if (!isOpen) return null;

	const handleLoad = () => {
		setLoading(false);
		setError(false);
	};

	const handleError = () => {
		setLoading(false);
		setError(true);
	};

	const handleDownload = () => {
		const link = document.createElement("a");
		link.href = pdfUrl; // pdfUrl est déjà encodé depuis openPDF
		link.download = `${title.replace(/\s+/g, "_")}.pdf`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center">
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

			{/* Modal */}
			<div className="relative w-[95vw] h-[95vh] max-w-4xl bg-slate-900 rounded-lg border border-cyber-cyan/30 shadow-2xl">
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b border-slate-700">
					<h3 className="text-lg font-semibold text-cyber-cyan">{title}</h3>

					<div className="flex items-center space-x-3">
						{/* Download button */}
						<button
							onClick={handleDownload}
							className="p-2 rounded-lg bg-cyber-purple/20 text-cyber-purple hover:bg-cyber-purple hover:text-white transition-all duration-300"
							title={t.pdf.downloadTitle}
						>
							<FontAwesomeIcon icon={["fas", "download"]} />
						</button>

						{/* Close button */}
						<button
							onClick={onClose}
							className="p-2 rounded-lg bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-all duration-300"
						>
							<FontAwesomeIcon icon={["fas", "times"]} />
						</button>
					</div>
				</div>

				{/* PDF Content */}
				<div className="relative w-full h-[calc(100%-4rem)] bg-slate-800">
					{loading && (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center">
								<div className="w-8 h-8 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
								<p className="text-slate-400">{t.pdf.loading}</p>
							</div>
						</div>
					)}

					{error ? (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center">
								<FontAwesomeIcon icon={["fas", "file-circle-exclamation"]} className="text-4xl text-red-400 mb-4" />
								<p className="text-red-400 mb-4">{t.pdf.error}</p>
								<button onClick={handleDownload} className="cyber-button">
									{t.pdf.downloadButton}
								</button>
							</div>
						</div>
					) : (
						<iframe
							src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
							className="w-full h-full rounded-b-lg"
							onLoad={handleLoad}
							onError={handleError}
							title={title}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
