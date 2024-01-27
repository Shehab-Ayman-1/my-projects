import FileSaver from "file-saver";

export const downloadImage = (_id: string, photo: string) => {
   FileSaver.saveAs(photo, `download-${_id}.jpg`);
};
