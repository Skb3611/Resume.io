const FS = require("fs");
const PATH = require("path");
const { PrismaClient } = require("@prisma/client");
// import { prisma } from "@prisma/client";
let prisma = new PrismaClient();
console.log(__dirname);
// @ts-ignore
let folders = FS.readdirSync(__dirname).filter((file) =>
  FS.statSync(PATH.join(__dirname, file)).isDirectory()
);
// @ts-ignore
folders.map(async (folder) => {
  let metadata = FS.readFileSync(
    PATH.join(__dirname, folder, "metadata.json"),
    "utf8"
  );
  // console.log(metadata)
  let metadataObj = JSON.parse(metadata);
  await prisma.template.create({
    data: {
      id: parseInt(metadataObj.id),
      name: metadataObj.name,
      thumbnail: metadataObj.thumbnail,
      description: metadataObj.description,
      category: metadataObj.category,
    },
  });
  await prisma.templateMetaData.create({
    data: {
      id: parseInt(metadataObj.id),
      templateId: parseInt(metadataObj.metaData.id),
      PersonalInformation: metadataObj.metaData.PersonalInformation,
      Education: metadataObj.metaData.Education,
      Skills: metadataObj.metaData.Skills,
      Experience: metadataObj.metaData.Experience,
      Projects: metadataObj.metaData.Projects,
      Certifications: metadataObj.metaData.Certifications,
      Awards: metadataObj.metaData.Awards,
      Languages: metadataObj.metaData.Languages,
      Hobbies: metadataObj.metaData.Hobbies,
      References: metadataObj.metaData.References,
    },
  });

});
// console.log(folders);
