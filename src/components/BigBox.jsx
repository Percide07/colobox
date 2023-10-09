import Box from "./Box";
const BigBox = ({colors})=> {
    return(
        <div>
            <Box  colors={colors}/>
            <Box  colors={colors}/>
            <Box  colors={colors}/>
            <Box  colors={colors}/>
            <Box  colors={colors}/>
        </div>
    )
}
export default BigBox;