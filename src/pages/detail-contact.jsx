import { Button, Card } from "react-bootstrap";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function DetailContact() {
  const navigate = useNavigate();
  return (
    <div className="bg-main">
      <span
        className="back-button"
        onClick={() => navigate("/")}
        variant="outline"
      >
        <IoChevronBack size={40} style={{ color: "rgb(133, 92, 38)" }} />
      </span>
      <div
        className="p-3 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card className="card-contact">
          <Card.Body>
            <h2 className="fw-bold mb-3">ติดต่อเรา</h2>
            <Card.Text>
              <p>
                {" "}
                หากคุณต้องการสร้าง Quiz เกมให้กับแบรนด์ของคุณ
                เพื่อเป็นกิจกรรมทางการตลาด
                หรือเพื่อสร้างความสัมพันธ์ที่ดีกับลูกค้า
                สามารถติดต่อเราได้ที่ช่องทางด้านล่างนี้เลยค่ะ
              </p>
              <p>
                สามารถเก็บข้อมูลของผู้เล่นได้อย่างปลอดภัย
                และนำไปใช้ประโยชน์ได้จริง
                แต่ยังคงให้ความสำคัญกับความเป็นส่วนตัวของผู้เล่นเป็นหลัก (PDPA)
                เช่น การนำไปใช้ในการทำ CRM หรือการทำ Retargeting Ads
                ได้อย่างมีประสิทธิภาพ
              </p>
              <hr />
              <Button
                variant="outline-dark"
                className="mb-2"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/whoyouare.official?igsh=NnVqb3loeGV5Z2cy&utm_source=qr",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Contact Us
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DetailContact;
