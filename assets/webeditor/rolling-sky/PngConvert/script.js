document.getElementById("processButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("upload");
    const widthInput = document.getElementById("widthInput");
    const heightInput = document.getElementById("heightInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("请上传CMR文件！");
        return;
    }

    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (!width || width <= 0 || !height || height <= 0) {
        alert("请输入有效的宽度和高度(px)！");
        return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
        // 解压CMR文件中的数据
        const compressedData = new Uint8Array(e.target.result);
        const rgbaData = pako.inflate(compressedData);

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;

        // 创建ImageData并将解压后的RGBA数据填充进去
        const imageData = ctx.createImageData(width, height);
        imageData.data.set(rgbaData);
        ctx.putImageData(imageData, 0, 0);

        alert("图片已成功还原！");
    };

    reader.readAsArrayBuffer(file);
});
