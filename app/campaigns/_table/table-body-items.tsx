import {
    TableCell, TableRow
} from "@/components/ui/table"
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import prisma from "@/lib/PrismaConnect"
const TableBodyItems = async () => {
    const campaigns = await prisma.campaign.findMany();
    const domains = await prisma.domain.findMany();
    return (
        <>
            {campaigns.map((item, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">
                        {item.title}
                    </TableCell>
                    <TableCell className="font-medium">
                        {domains.find(domain => domain.id === item.domainId)?.domain}
                    </TableCell>
                    <TableCell>
                        <Badge variant="outline">{item.status ? "Aktif" : "Pasif"}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                        {item.createdAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>İşlemler</DropdownMenuLabel>
                                <DropdownMenuItem>Düzenle</DropdownMenuItem>
                                <DropdownMenuItem>Sil</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
        </>
    )
}

export default TableBodyItems
