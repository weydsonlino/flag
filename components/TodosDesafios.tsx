import { useEffect, useState } from "react";
import Link from "next/link";
import { FormDesafio } from "@/components/FormDesafio";
import { AtualizarDesafios } from "./AtualizarDesafios";
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

interface Challenger {
  id: number;
  countryName: string;
  easyflagLink: string;
  hardflagLink: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export const TodosDesafios = () => {
  const [desafios, setDesafios] = useState<Challenger[]>([]);
  const [status, setStatus] = useState(false);

  //////Usados como props para o componente AtualizarDesafios
  const [isEditing, setIsEditing] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [easyflagLink, setEasyFlagLink] = useState("");
  const [hardflagLink, setHardFlagLink] = useState("");
  const [id, setId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.data);
      setDesafios(data.data);
    };
    fetchData();
  }, [status]);

  console.log(desafios);

  return (
    <div className="flex flex-col justify-center items-center justify-items-center">
      {isEditing ? (
        <AtualizarDesafios
          countryName={countryName}
          easyflagLink={easyflagLink}
          hardflagLink={hardflagLink}
          id={id}
          setStatus={setStatus}
          status={status}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
        />
      ) : (
        <></>
      )}

      <div className="flex flex-col justify-center items-center justify-items-center">
        <h1 className="text-3xl m-4">Desafios disponiveis</h1>
        <div>
          <Table className="w-[750px] ">
            <TableCaption>Todos os Desafios</TableCaption>
            <TableHeader className="w-1000px">
              <TableRow>
                <TableHead className="text-left">País</TableHead>
                <TableHead className="">Easy bandeira</TableHead>
                <TableHead className="">Hard bandeira</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {desafios.map((game) => (
                <TableRow>
                  <TableCell className="font-medium">
                    ID-{game.number} {game.countryName}
                  </TableCell>
                  <TableCell className="text-right w-5">
                    <img src={game.easyflagLink} />
                  </TableCell>
                  <TableCell className="text-right w-5">
                    <img src={game.hardflagLink} />
                  </TableCell>
                  <TableCell className="text-right w-5">
                    <Button
                      className="cursor-pointer"
                      disabled={isEditing}
                      onClick={() => {
                        setIsEditing(true);
                        setId(game.number);
                        setEasyFlagLink(game.easyflagLink);
                        setHardFlagLink(game.hardflagLink);
                        setCountryName(game.countryName);
                        setStatus(true);
                      }}
                    >
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
