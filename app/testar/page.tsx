"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function testar() {
  return (
    <div className="flex flex-col justify-center items-center justify-items-center">
      <h1 className="text-4xl m-4">Desafios</h1>
      <div>
        <Table className="w-[750px] ">
          <TableCaption>Todos os Desafios</TableCaption>
          <TableHeader className="w-1000px">
            <TableRow>
              <TableHead className="text-left">País</TableHead>
              <TableHead className="">Link bandeira</TableHead>
              <TableHead className="text-right">Icon</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">brasil</TableCell>
              <TableCell>https://flagcdn.com/256x192/br.png</TableCell>
              <TableCell className="text-right w-5">
                <img src="https://flagcdn.com/256x192/br.png" />
              </TableCell>
              <TableCell className="text-right w-5">
                <Button>Editar</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
