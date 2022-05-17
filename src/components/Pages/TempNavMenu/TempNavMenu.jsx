export default function TempNavMenu({ pageName }) {
  return (
    <>
      <h1>{pageName}</h1>
      <br />
      <a href="/">Home page - Opened</a>
      <br />
      <a href="/login">Login - Public-Restricted</a>
      <br />
      <a href="/registration">Registration - Public-Restricted</a>
      <br />
      <a href="/dashboard">Dashboard - Private</a>
    </>
  );
}
