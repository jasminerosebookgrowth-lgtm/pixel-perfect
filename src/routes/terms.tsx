import { createFileRoute } from "@tanstack/react-router";
import { meta } from "@/components/site/Layout";
import { Legal } from "@/components/site/Legal";

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms & Conditions — Daniel Trade", "The terms and conditions governing use of the Daniel Trade website and services."),
  component: () => (
    <Legal title="Terms & Conditions" sections={[
      ["Acceptance of Terms", "By accessing this website, you agree to these Terms & Conditions. If you do not agree, please do not use the site."],
      ["No Financial Guarantees", "Trading and investing involve risk, including possible loss of capital. Daniel Trade does not guarantee profits or specific results. Content is for informational and educational purposes only."],
      ["Use of the Website", "You agree to use this website lawfully and not to interfere with its operation or security."],
      ["Intellectual Property", "All content, branding, and materials on this site belong to Daniel Trade unless otherwise stated and may not be reused without permission."],
      ["Limitation of Liability", "Daniel Trade is not liable for any losses or damages arising from use of this website or reliance on its content, to the extent permitted by law."],
      ["Changes to Terms", "We may revise these terms at any time. Continued use of the site constitutes acceptance of the updated terms."],
    ]} />
  ),
});
