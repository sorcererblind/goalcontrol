import React from "react";
import {Appcontext} from "./Context";

const Stadistics = () => {
    const context= React.useContext(Appcontext);

return (
<table className="statistics">
    <tbody>
        <tr>
            <td className="row-label">
            Asesores
            </td>
            <td>
                {context.state.players.leigth}   
            </td>
        </tr>
        <tr>
            <td className="row-label">
             Total cierres:   
            </td>
            <td>
             {context.totalPoints}   
            </td>
        </tr>
    </tbody>
</table>
);
}

export default Stadistics;