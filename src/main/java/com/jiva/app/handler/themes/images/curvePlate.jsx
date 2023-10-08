import { Box } from "@mui/system";

export default function CurvePlate(props) {
    const { alignment } = props;
    return (
        <Box
            sx={{
                zIndex: -1,
                position: "absolute",
                ...alignment,
            }}
        >
            <svg
                fill="none"
                height="563"
                viewBox="0 0 1440 563"
                width="1440"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <linearGradient
                    id="a"
                    gradientUnits="userSpaceOnUse"
                    x1="720"
                    x2="720"
                    y1="1"
                    y2="562"
                >
                    <stop offset="0" stopColor="#4a6cf7" stopOpacity="0" />
                    <stop offset="1" stopColor="#4a6cf7" />
                </linearGradient>
                <linearGradient id="b">
                    <stop offset="0" stopColor="#4a6cf7" stopOpacity=".5" />
                    <stop offset="1" stopColor="#2441b6" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="c"
                    gradientUnits="userSpaceOnUse"
                    x1="-18.9868"
                    x2="202.082"
                    xlinkHref="#b"
                    y1="176.5"
                    y2="533.363"
                />
                <linearGradient
                    id="d"
                    gradientUnits="userSpaceOnUse"
                    x1="276.308"
                    x2="430.232"
                    xlinkHref="#b"
                    y1="609"
                    y2="334.49"
                />
                <linearGradient
                    id="e"
                    gradientUnits="userSpaceOnUse"
                    x1="1080.2"
                    x2="1132.87"
                    y1="121.062"
                    y2="340.496"
                >
                    <stop offset="0" stopColor="#4a6cf7" stopOpacity=".31" />
                    <stop offset="1" stopColor="#2441b6" stopOpacity="0" />
                </linearGradient>
                <path
                    d="m0 87 263.536 174 659.834-260 516.63 224.5m0 76.5-466.409-63.5-696.63 323.5-276.961-187"
                    stroke="url(#a)"
                />
                <path
                    d="m276.808 561.5-12.991-300.5-263.817-174v288z"
                    fill="url(#c)"
                />
                <path
                    d="m339.764 231-75.947 30 12.991 301 272.81-127z"
                    fill="url(#d)"
                />
                <path d="m1439 225-335.77-146v177l335.77 46z" fill="url(#e)" />
            </svg>
        </Box>
    );
}