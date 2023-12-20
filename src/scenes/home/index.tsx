import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from '@/assets/HomePageText.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <div>HomePageText</div>
  )
}

export default Home;