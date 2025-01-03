import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const interactions = [
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
  {
    name: "Mandate Compliance Evaluation",
    description:
      "Evaluate client investments against their mandate, identify non-compliant investments, provide reasons for non-compliance, recommend compliant alternatives, and summarize the compliance status with an action plan.",
    interactionStatus: "Draft",
    tags: "Tag 1",
    promptSegments:
      "Mandate Compliance Evaluator Instructions [system], Mandate Compliance Evaluation Request [user]",
    version: "1",
    updated: "16 hrs ago",
  },
];

export function TableDemo() {
  return (
    <>
      <div className="sticky top-0 z-10 bg-white flex gap-2 px-6 mb-4">
        <Input size="xs" placeholder="name" className="w-[240px]" />
        <Input size="xs" placeholder="prompt" className="w-[240px]" />
        <Select>
          <SelectTrigger size="xs" className="w-[180px]">
    <SelectValue placeholder="Tags" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Tag 1</SelectItem>
    <SelectItem value="dark">Tag 2</SelectItem>
    <SelectItem value="system">Tag 3</SelectItem>
  </SelectContent>
</Select>
      </div>
      <Table className="relative">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader className="sticky top-0 z-10">
          <TableRow>
            <TableHead className="w-[400px]">Name</TableHead>
            <TableHead>Prompt segments</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Version</TableHead>
            <TableHead className="text-right">Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {interactions.map((interaction) => (
            <TableRow key={interaction.name}>
              <TableCell>
                {interaction.name}
                <div className="text-sm text-muted-foreground line-clamp-2">
                  {interaction.description}
                </div>
                {/* <div className="flex gap-2">
                    <Badge variant="outline">{interaction.tags}</Badge>
                </div> */}
              </TableCell>
              <TableCell>
                <span className="text-sm font-normal text-muted-foreground line-clamp-2">
                  {interaction.promptSegments}
                </span>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{interaction.interactionStatus}</Badge>
              </TableCell>
              <TableCell className="text-right">
                {interaction.version}
              </TableCell>
              <TableCell className="text-right whitespace-nowrap text-xs">
                {interaction.updated}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </>
  );
}
