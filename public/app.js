async function loadModel() {
  const id = document.getElementById("modelId").value;

  const res = await fetch(`/api/model/${id}`);
  const model = await res.json();

  const v = model.modelVersions[0];

  const images = v.images.slice(0,5).map(img =>
    `<img src="${img.url}">`
  ).join("");

  const file = v.files.find(f => f.name.endsWith(".safetensors"));

  document.getElementById("gallery").innerHTML = `
    <div class="card">
      <h2>${model.name}</h2>
      <div class="images">${images}</div>
      <p>${model.description || ""}</p>
      <a href="${file?.downloadUrl}" target="_blank">Download</a>
    </div>
  `;
}
