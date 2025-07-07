import { Button, DestructiveButton, PrimaryButton, SecondaryButton } from "@/shared";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-thin">hello world</h1>
      <h1 className="text-4xl font-extralight">hello world</h1>
      <h1 className="text-4xl font-light">hello world</h1>
      <h1 className="text-4xl font-normal">hello world</h1>
      <h1 className="text-4xl font-medium">hello world</h1>
      <h1 className="text-4xl font-semibold">hello world</h1>
      <h1 className="text-4xl font-bold">hello world</h1>
      <h1 className="text-4xl font-extrabold">hello world</h1>
      <h1 className="text-4xl font-black">hello world</h1>
      <Button size="xs" loading>
        click me
      </Button>
      <Button size="sm">click me</Button>
      <Button size="md">click me</Button>
      <Button size="lg">click me</Button>
      <PrimaryButton>click me</PrimaryButton>
      <PrimaryButton variant="outline">click me</PrimaryButton>
      <PrimaryButton variant="link">click me</PrimaryButton>
      <SecondaryButton>click me</SecondaryButton>
      <SecondaryButton variant="outline">click me</SecondaryButton>
      <SecondaryButton variant="link">click me</SecondaryButton>
      <DestructiveButton>click me</DestructiveButton>
      <DestructiveButton variant="outline">click me</DestructiveButton>
      <DestructiveButton variant="link">click me</DestructiveButton>
      <DestructiveButton loading variant="link">
        click measd
      </DestructiveButton>
    </div>
  );
};

export default Home;
