import { Avatar, Button, Tooltip, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Table } from "@/components";
import { User } from "@/assets";
import { useContext } from "@/context";
import { useAxios } from "@/hooks";

const headers = ["Name", "Title", "Type", "Address", "City", "Distance", "Price", "Rating", "Photos", "Featured", "Controllers"];
export const Hotels = () => {
   const { loading, refetch } = useAxios("delete", "/");
   const [hotelsStates, hotelsDispatch] = useContext(2);
   const navigate = useNavigate();

   const handleDeleteHotel = async (id) => {
      const { data, loading, error } = await refetch("delete", `/hotels/delete-hotel/${id}`);
      if (!loading && !error && typeof data === "string") hotelsDispatch({ type: "DELETE_HOTEL", payload: id });
      if (!loading && error) alert(error);
   };

   const HotelsRows = () => {
      const hotels = hotelsStates.hotels;
      return hotels?.length
         ? hotels.map(({ _id, name, title, type, address, city, description, distance, price, rating, photos, featured }, i) => {
              let td = `py-3 px-5 ${i === hotels?.length - 1 ? "" : "border-b border-blue-gray-50"}`;
              let typography = `text-[18px] font-semibold text-blue-gray-600`;
              return (
                 <tr className={i % 2 ? "bg-blue-50" : ""} key={i}>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {++i} - {name}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {title}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {type}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {address}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {city}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {distance}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {price}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {rating}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <div className="flex items-center">
                          {(photos?.length ? photos : [User, User, User, User, User]).map((img, key) => (
                             <Tooltip key={key} content={name}>
                                <Avatar src={img} alt={name} size="xs" variant="circular" className={`cursor-pointer border-2 border-white ${!key ? "" : "-ml-2.5"}`} />
                             </Tooltip>
                          ))}
                       </div>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Typography variant="small" className={typography}>
                          {`${featured}`}
                       </Typography>
                    </td>
                    <td className={`${td} whitespace-nowrap`}>
                       <Button
                          className="mr-2 text-[15px]"
                          variant="gradient"
                          size="sm"
                          onClick={() => navigate("/dashboard/update-hotel", { state: { _id, name, title, type, address, city, description, distance, price, rating, photos, featured } })}
                       >
                          Update
                       </Button>
                       <Button className="text-[15px]" variant="gradient" size="sm" color="red" disabled={loading} onClick={() => handleDeleteHotel(_id)}>
                          Delete
                       </Button>
                    </td>
                 </tr>
              );
           })
         : null;
   };

   return (
      <div className="mb-4">
         <Table
            states={hotelsStates}
            dispatch={hotelsDispatch}
            title="Hotels"
            headers={headers}
            addButton={{ text: "Add Hotel", path: "/dashboard/add-hotel" }}
            paginationURL={"/hotels/get-limited-hotels"}
         >
            <HotelsRows />
         </Table>
      </div>
   );
};
