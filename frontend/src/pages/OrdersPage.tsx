import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { CRUD } from "../api/api";
import { Order } from "../models/order";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function getOrders() {
    setOrders((await CRUD.index("orders")).data);
    setLoading(false);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <TableContainer sx={{ paddingTop: "100px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Items</TableCell>
            <TableCell align="left">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <CircularProgress />
          ) : (
            orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.items.join(",")}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.totalprice}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrdersPage;
