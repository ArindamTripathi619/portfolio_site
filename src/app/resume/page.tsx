import Resume from "@/components/Resume";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume | Arindam Tripathi",
    description: "Software Engineer & Systems Researcher Resume",
};

export default function ResumePage() {
    return <Resume />;
}
