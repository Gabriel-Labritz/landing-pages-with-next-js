/* eslint-disable @typescript-eslint/no-explicit-any */
import { GridContentProps } from '../components/GridContent/GridContent';
import {
  GridImageElementProps,
  GridImageProps,
} from '../components/GridImage/GridImage';
import {
  GridTextElementProps,
  GridTextProps,
} from '../components/GridText/GridText';
import { GridTwoColumnsProps } from '../components/GridTwoColumns/GridTwoColumns';
import { SectionProps } from '../templates/Home/Home';

export const mapSections = (sections = []): SectionProps[] => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColums(section);
    }

    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }

      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColums = (
  section = {} as any,
): GridTwoColumnsProps => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: {
      data: { url: srcImg = '' },
    },
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section = {} as any): GridContentProps => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;

  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {} as any): GridTextProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((text: any): GridTextElementProps => {
      const { title = '', description = '' } = text;
      return {
        title,
        description,
      };
    }),
  };
};
export const mapImageGrid = (section = {} as any): GridImageProps => {
  const {
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    background,
    sectionId,
    grid: grid.map((img: any): GridImageElementProps => {
      const {
        image: { url: srcImg = '' } = '',
        alternativeText: altText = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};
