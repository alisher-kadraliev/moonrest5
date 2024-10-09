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
const TableBodyItems = () => {

    
  return (
      <TableRow>
          <TableCell className="font-medium">
              Laser Lemonade Machine
          </TableCell>
          <TableCell>
              <Badge variant="outline">Draft</Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">
              2023-07-12 10:42 AM
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
  )
}

export default TableBodyItems
