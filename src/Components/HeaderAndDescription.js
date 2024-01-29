
import Description from "./Description"
import  Header  from "./atoms/Header"
const HeaderAndDescription=({headerText,descriptionText, className,size})=>(
    <>
    <Header size={size}>{headerText}</Header>
    <Description descriptions={descriptionText} size={size}/>
    </>
)
export default HeaderAndDescription