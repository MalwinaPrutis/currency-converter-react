import { useState, useEffect } from "react";

const useResultUpdate = (amount, currencyFrom, currencyTo, rate, dataAPI) => {
    
        const [result, setResult] = useState("");
        const [resultText, setResultText] = useState("");
        const [isCalculating, setIsCalculating] = useState(false);

        useEffect(() => {
            setResult({
                amountFrom: +amount,
                currencyFrom,
                currencyTo,
                amountTo: +amount * rate
            })
        }, [currencyFrom, currencyTo, amount, rate])

        useEffect(() => {
            if (isCalculating && dataAPI.base_code === currencyFrom) {
                writeResult(result, dataAPI);
                setIsCalculating(false);
            }
        }, [dataAPI, currencyFrom, isCalculating]);

        const writeResult = (result) => {
            if (result) {
                const formattedAmountFrom = result.amountFrom.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                const formattedAmountTo = result.amountTo.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

                return (setResultText(
                    <strong>
                        {formattedAmountFrom}&nbsp;{result.currencyFrom}&nbsp;=
                        {" "}
                        {formattedAmountTo}&nbsp;{result.currencyTo}
                    </strong>
                ))
            }
        }

        const LoadCurrencyCalculation = () => {
            if (dataAPI.base_code !== currencyFrom) {
                setResultText("Przeliczam");
                setIsCalculating(true);
            } else {
                writeResult(result, dataAPI);
            }
        };

        return { result, resultText, LoadCurrencyCalculation }
    }

export default useResultUpdate