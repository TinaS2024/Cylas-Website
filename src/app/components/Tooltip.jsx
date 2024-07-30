
const Tooltip = (props) =>
    {
        const {tooltiptitel,tooltiptext} = props
      
        return(
            <div class="tooltip">{tooltiptitel}
            <span class="tooltiptext">{tooltiptext}</span>
          </div>

        )
    }

export default Tooltip;