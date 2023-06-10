import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
    '/image8.jpg',
    '/image9.jpg',
    '/image10.jpg',
    '/image11.jpg',
    '/image12.jpg',
  ];

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const galleryTabs = () => {
    const tabSize = 9;
    const tabCount = Math.ceil(images.length / tabSize);
    const tabs = [];

    for (let i = 0; i < tabCount; i++) {
      const startIndex = i * tabSize;
      const endIndex = startIndex + tabSize;
      const tabImages = images.slice(startIndex, endIndex);

      tabs.push(
        <TabPanel key={i}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tabImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg shadow-md cursor-pointer"
                whileHover="hover"
                variants={imageVariants}
              />
            ))}
          </div>
        </TabPanel>
      );
    }

    return tabs;
  };

  return (
    <Tabs>
      <TabList>
        {Array.from({ length: Math.ceil(images.length / 9) }).map((_, index) => (
          <Tab key={index}>Page {index + 1}</Tab>
        ))}
      </TabList>

      {galleryTabs()}
    </Tabs>
  );
};

export default Gallery;
