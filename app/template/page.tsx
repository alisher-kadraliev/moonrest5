import prisma from "@/lib/PrismaConnect";
import CreateTemplate from "./create-template";

export default async function TemplatePage() {
 const domains = await prisma.domain.findMany();
  return (
    <div>
      <CreateTemplate />
      {domains.map((domain) => (
        <div key={domain.id}>
          <h2>{domain.title}</h2>
          <p>{domain.domain}</p>
        </div>
      ))}
    </div>
  );
}
