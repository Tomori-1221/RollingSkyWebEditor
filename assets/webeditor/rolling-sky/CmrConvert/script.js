document.getElementById("processButton").addEventListener("click", async () => {
    const fileInput = document.getElementById("upload");
    const file = fileInput.files[0];

    if (!file) {
        alert("请上传图片文件！");
        return;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
        img.src = e.target.result;
    };

    img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // 提取RGBA数据
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const rgbaData = imageData.data;

        // 压缩数据并生成CMR文件
        const compressedData = pako.deflate(rgbaData);
        const blob = new Blob([compressedData], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "image.cmr";
        a.click();

        URL.revokeObjectURL(url);
    };

    reader.readAsDataURL(file);
});
