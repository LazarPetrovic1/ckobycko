import { useNavigate, useParams } from "react-router-dom"
import { ActionContainer, StaticContainer } from "./styled";

function ActionBar({ isStatic }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const ActionWrapper = isStatic ? StaticContainer : ActionContainer;
  return (
    <ActionWrapper style={{ gap: '1rem' }}>
      <button disabled={id <= 1} onClick={() => navigate(`/products/${parseInt(id) - 1}`)}>&#x2190;</button>
      <button style={{ height: isStatic ? "100%" : "auto" }} className="mid" onClick={() => navigate(`/store`)}>&#9679;</button>
      <button disabled={id >= 2} onClick={() => navigate(`/products/${parseInt(id) + 1}`)}>&#x2192;</button>
    </ActionWrapper>
  )
}

export default ActionBar