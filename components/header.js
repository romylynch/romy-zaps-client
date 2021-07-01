import Upload from "./upload";

function Header({ onUpload }) {
  return (
    <header className="bg-white flex justify-between items-center p-4 border-b border-gray-200">
      <h2 className="text-2xl font-black tracking-tight leading-tight">Zapflows</h2>
      <Upload onUpload={onUpload} />
    </header>
  );
}

export default Header;