import Loader from "@/components/Loader";
import { dataQueryKeys } from "@/utils/querykey";
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Table from "@mui/material/Table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

interface UserType {
  email: string;
  id: number;
  name: string;
}

const Container = () => {
  const queryClient = useQueryClient();
  const router = useRouter()
  const [editable, setEditable] = useState(false);
  const tableHead = ["Name", "Admin Id", "Email Address", ""];

  const { data, isLoading } = useQuery({
    queryKey: [dataQueryKeys.user],
    queryFn: async () => {
      const response = await fetch("/api/users/admin/getAdmin");
      const data = await response.json();
      return data;
    },
  });

  const handleToggleEdit = () => setEditable(!editable);

  const { mutate } = useMutation({
    mutationFn: async (id: number) =>
      await fetch(`/api/users/admin/delete/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [dataQueryKeys.user] }),
  });

  if (isLoading) return <Loader />;

  return (
    <div className="flex flex-col gap-6 font-sans w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">Manage Admins</h1>
        <div className="flex gap-10">
        <CustomButton label="Add New Admin" onClick={()=>router.push("/admin/auth/signup")}/>
        <CustomButton label="Manage" onClick={handleToggleEdit}/>
        </div>
      </div>

      <TableContainer className="w-full flex " component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHead.map((head, index) => (
                <TableCell align="center" key={index} className="!text-xl text-[#424242] transition-all duration-500">
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: UserType, index: number) => {
              if (item.name !== "") {
                return (
                  <TableRow key={index} className="transition-all duration-500">
                    <TableCell align="center" className="!text-lg">
                      {item.name}
                    </TableCell>
                    <TableCell align="center" className="!text-lg">
                      {item.id}
                    </TableCell>
                    <TableCell align="center" className="!text-lg">
                      {item.email}
                    </TableCell>
                    <TableCell onClick={() => mutate(item.id)} align="center" className={`${editable ? "opacity-100 " : "opacity-0 "} !flex justify-center cursor-pointer hover:bg-[#f55252] bg-[#c93434] !text-white !transition-all !duration-500`}>
                      <IoTrashOutline size={24} />
                    </TableCell>
                  </TableRow>
                );
              }
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Container;
