import { BtImage } from "@/components/BtImage";
import { Button } from "@/components/Buttons";
import { Container } from "@/components/Container";
import { Spacer } from "@/components/Spacer";
import { MainLayout } from "../../layouts/MainLayout";

const HomeTemplate = () => {
  return (
    <MainLayout>
      <Container flexVertical css={{ minHeight: "75vh" }}>
        <h1>HOME</h1>
        <Button type={"cancel"}>Texto qualquer</Button>

        <Spacer size="10" />

        <div style={{ width: "300px", height: "300px", position: "relative" }}>
          <BtImage fill cover src="https://source.unsplash.com/featured/300x201" />
        </div>
      </Container>
    </MainLayout>
  );
};

export { HomeTemplate };
