import Bag from '../components/Books/Bag/Bag'

const BagPage = ({ isLoading, httpError }) => {
    return <Bag isLoading={isLoading} httpError={httpError} />
}
export default BagPage