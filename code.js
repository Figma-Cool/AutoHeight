const autoHeight = () => {
  const selectedItem = figma.currentPage.selection[0];
  let sortArray = selectedItem.children;

  if (selectedItem.type !== "FRAME") {
    figma.notify("not Frame");
    figma.closePlugin();
  } else {
    let sortedArray = sortArray.slice().sort(function (a, b) {
      return Math.round(a.y) - Math.round(b.y);
    });

    selectedItem.resize(
      selectedItem.width,
      Math.round(
        sortedArray[sortedArray.length - 1].y +
          sortedArray[sortedArray.length - 1].height
      )
    );

    selectedItem.setRelaunchData({ open: "" });
    figma.notify("👌");
    figma.closePlugin();
  }
};

autoHeight();

console.log(figma);

switch (figma.command) {
  case "open":
    autoHeight();
}
