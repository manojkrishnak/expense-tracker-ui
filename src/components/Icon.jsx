import {ReactComponent as MedicalIcon} from "../Icons/medical.svg";
import {ReactComponent as FoodIcon} from "../Icons/food.svg";
import {ReactComponent as OthersIcon} from "../Icons/kebab.svg";
import {ReactComponent as PersonalIcon} from "../Icons/user-solid.svg";
import {ReactComponent as EducationIcon} from "../Icons/university-solid.svg";
import {ReactComponent as BillsIcon} from "../Icons/money-bill-alt-solid.svg";
import {ReactComponent as ShoppingIcon} from "../Icons/shopping-bag-solid.svg";

function Icon(props){
    console.log(props)
    const iconCategory = {
        "medical": <MedicalIcon />,
        "food-dining": <FoodIcon />,
        "others": <OthersIcon />,
        "personal-care": <PersonalIcon />,
        "education": <EducationIcon />,
        "bills-utilities": <BillsIcon />,
        "shopping": <ShoppingIcon />
    };
    const CategoryIcon = iconCategory[props.category];

    return CategoryIcon 
}


export default Icon;