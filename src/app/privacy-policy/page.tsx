import { redirect } from "next/navigation";
import { STUDIO_INFO } from "@/data/games";

export default function PrivacyPolicyPage() {
  redirect(STUDIO_INFO.privacyPolicyNetlifyUrl);
}
