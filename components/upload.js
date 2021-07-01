function Upload({ onUpload }) {

  let uploadFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      let result = JSON.parse(event.target.result);
      let zaps = result.zaps.map(zap => {
        let nodes = Object.values(zap.nodes).map(node => {return {action: node.action, selectedApi: node.selected_api}});
        return {title: zap.title, nodes};
      });
      onUpload(zaps);
    });
    reader.readAsText(file);
  }

  return (
    <label className="bg-yellow-600 px-4 py-2 text-white rounded-full cursor-pointer">
      <span>Upload Zapier file</span>
      <input type='file' class="hidden" accept=".json" onChange={uploadFile} />
    </label>
  );
}

export default Upload;