// import { useTranslation } from 'react-i18next';
// import { memo } from 'react';
// import { classNames } from '@/shared/lib/classNames/classNames';
// import { Text } from '@/shared/ui/deprecated/Text/Text';
// import { Icon } from '@/shared/ui/redesigned/Icon/Icon';
// import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
// import { Card } from '@/shared/ui/deprecated/Card/Card';
// import { Avatar } from '@/shared/ui/deprecated/Avatar/Avatar';
// import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
// import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
// import cls from './ArticleListItem.module.scss';

// import { ArticleBlockType, ArticleView } from '@/entities/Article/model/consts/consts';
// import { getRouterArticleDetails } from '@/shared/const/router';
// import { AppImage } from '@/shared/ui/redesigned/AppImage/AppImage';
// import { Skeleton } from '@/shared/ui/deprecated/Skeleton/Skeleton';
// import { type ArticleTextBlock } from '@/entities/Article/model/types/article';
// import { ArticleTextBlockComponent } from '../../ArticleBlocks/ArticleTextBlockComponent/ArticleTextBlockComponent';
// import { type ArticleListItemProps } from '../ArticleListItem';

// export const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
//   const { className, article, view, target } = props;
//   const { t } = useTranslation();

//   const types = <Text text={article.type.join(', ')} className={cls.types} />;
//   const views = (
//     <>
//       <Text text={String(article.views)} className={cls.views} />
//       <Icon Svg={EyeIcon} />
//     </>
//   );

//   if (view === ArticleView.BIG) {
//     const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

//     return (
//       <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
//         <Card className={cls.card}>
//           <div className={cls.header}>
//             <Avatar size={30} src={article.user.avatar} />
//             <Text text={article.user.username} className={cls.username} />
//             <Text text={article.createdAt} className={cls.date} />
//           </div>
//           <Text title={article.title} className={cls.title} />
//           {types}
//           <AppImage
//             src={article.img}
//             className={cls.img}
//             alt={article.title}
//             fallback={<Skeleton width={'100%'} height={250} />}
//           />
//           {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
//           <div className={cls.footer}>
//             <AppLink target={target} to={getRouterArticleDetails(article.id)}>
//               <Button theme={ButtonTheme.OUTLINE}>{t('Читать далее...')}</Button>
//             </AppLink>
//             {views}
//           </div>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <AppLink
//       target={target}
//       to={getRouterArticleDetails(article.id)}
//       className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
//     >
//       <Card className={cls.card}>
//         <div className={cls.imageWrapper}>
//           <AppImage
//             src={article.img}
//             className={cls.img}
//             alt={article.title}
//             fallback={<Skeleton width={'200'} height={200} />}
//           />
//           <Text text={article.createdAt} className={cls.date} />
//         </div>
//         <div className={cls.infoWrapper}>
//           {types}
//           {views}
//         </div>
//         <Text text={article.title} className={cls.title} />
//       </Card>
//     </AppLink>
//   );
// });
