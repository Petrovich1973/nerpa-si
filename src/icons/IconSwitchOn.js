const IconSwitchOn = ({
                          width = 18,
                          height = 10,
                          viewBox = "0 0 18 10",
                          fill = "#BDCDA9"
                      }) => (
    <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill={fill}
              d="M0 5C2.41415e-07 7.76142 2.23858 10 5 10L13 10C15.7614 10 18 7.76142 18 5C18 2.23858 15.7614 -2.41411e-07 13 0L5 6.99382e-07C2.23858 9.40794e-07 -2.41408e-07 2.23858 0 5Z"/>
        <path fill="white"
              d="M1 5C1 2.79086 2.79086 1 5 1H13C15.2091 1 17 2.79086 17 5C17 7.20914 15.2091 9 13 9H5C2.79086 9 1 7.20914 1 5Z"/>
        <path fill={fill}
              d="M18 5C18 2.23858 15.7614 -2.41411e-07 13 0C10.2386 2.41411e-07 8 2.23858 8 5C8 7.76142 10.2386 10 13 10C15.7614 10 18 7.76142 18 5Z"/>
    </svg>

)

export default IconSwitchOn
