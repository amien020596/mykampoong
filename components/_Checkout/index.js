import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Float from "./Float";
import Itinenary from "./Itinenary";
import { useRouter } from "next/router";
import Payment from "./Payment";
import CheckoutContext from "libs/hooks/checkout";
export default function Checkout() {
  const { step, setStep } = CheckoutContext.useContainer();
  const router = useRouter();
  const handleBack = () => {
    if (step === 1) {
      router.back();
    } else {
      setStep(step - 1);
    }
  };
  return (
    <div>
      <style jsx>
        {`
          .left {
            max-width: 644px;
            width: 100%;
            margin-bottom: 70px;
          }
          .right {
            width: calc(100% - 644px);
            margin-left: 100px;
          }
        `}
      </style>
      <div className="container">
        <div className="f" style={{ padding: "35px 0" }}>
          <div className="left">
            <div style={{ width: "100%" }}>
              <Button
                type="text"
                style={{ padding: "0", marginBottom: 20 }}
                onClick={() => handleBack()}
              >
                <LeftOutlined />
                {step === 1 && "Back"}
                {step === 2 && "Itinenary"}
              </Button>
              {step === 1 && <Itinenary />}
              {step === 2 && <Payment />}
            </div>
          </div>
          <div className="right">
            <Float />
          </div>
        </div>
      </div>
    </div>
  );
}
