export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      name: 'imageName',
      title: 'ImageName',
      type: 'string',
      options: {
        maxLength: 90,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'imageName',
        maxLength: 90,
      },
    },
  ],
}
