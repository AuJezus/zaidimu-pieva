import { type Asset } from "contentful";
import Image from "next/image";

function ContentfulImage({asset, ...props}: Omit<React.HTMLAttributes<HTMLImageElement>, 'alt'> & {asset?: Asset<"WITHOUT_UNRESOLVABLE_LINKS", string>, fill?: boolean, priority?: boolean}) {
  if(!asset) return <Image src='undefined' alt='No image provided'/>

  const {file, description} = asset?.fields;

  if(!description) throw Error('Asset does not have description');

  if(!file)
    throw Error('Asset does not have file field');

  const image = file.details.image;

  return <Image src={'https:' +file?.url} width={image?.width} height={image?.height} alt={description} {...props}/>
}

export default ContentfulImage