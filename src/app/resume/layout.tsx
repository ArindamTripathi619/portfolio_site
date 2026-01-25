import "@/app/resume/original-resume.css";

export default function ResumeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="resume-page-wrapper">
            {children}
        </div>
    );
}
