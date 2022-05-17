export default function Home() {
  console.log('==HOME==');
  return (
    <>
      <h1>RegistrationPage</h1>
      <a href="/">Home page - opened</a>
      <br />
      <a href="/login">Login - publicRestricted</a>
      <br />
      <a href="/registration">Registration - publicRestricted</a>
      <br />
      <a href="/dashboard">Dashboard - private</a>
    </>
  );
}
