import { serveBalansPage } from "@/lib/serve-balans-page";

export const dynamic = "force-static";

export const GET = serveBalansPage("clinical-diabetes-type-2");
