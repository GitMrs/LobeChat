import { ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import FileList from '@/app/chat/components/FileList';
import { LOADING_FLAT } from '@/const/message';
import { ChatMessage } from '@/types/chatMessage';

import BubblesLoading from '../Loading';

export const UserMessage = memo<
  ChatMessage & {
    editableContent: ReactNode;
  }
>(({ id, editableContent, content, ...res }) => {
  if (content === LOADING_FLAT) return <BubblesLoading />;

  return (
    <Flexbox gap={8} id={id}>
      {editableContent}
      {res.files && <FileList editable={false} items={res.files} />}
    </Flexbox>
  );
});
