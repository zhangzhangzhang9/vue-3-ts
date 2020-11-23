export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export const testData: PostProps[] = [
  {
    id: 1,
    columnId: 1,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  },
  {
    id: 2,
    columnId: 2,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  },
  {
    id: 3,
    columnId: 3,
    content: '分享100%原创干货，致力于帮助EHS人成长.',
    image:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路',
    createAt: '2020-11-20'
  }
];
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt: string;
  columnId: number | string;
}
export const testPosts: ColumnProps[] = [
  {
    id: 1,
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路'
  },
  {
    id: 2,
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路'
  },
  {
    id: 3,
    description: '分享100%原创干货，致力于帮助EHS人成长.',
    avatar:
      'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5f3e41b8b7d9c60b68cdd1ef.jpg',
    title: 'EHS之路'
  }
];
