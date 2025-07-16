import { BoardColumn } from './BoardColumn';
import { Tabs } from 'radix-ui';
import { Text } from '@radix-ui/themes';
import './lib';
import { TASK_STATUSES } from '@shared/constants';
import type { BoardTabsProps } from '@widgets/board/lib';

export const BoardTabs = ({ tasks }: BoardTabsProps) => {
  return (
    <Tabs.Root defaultValue={TASK_STATUSES[0].key}>
      <Tabs.List style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {TASK_STATUSES.map((status) => (
          <Tabs.Trigger
            className="tabs-trigger"
            key={status.key}
            value={status.key}
          >
            <Text size="2">{status.label}</Text>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {TASK_STATUSES.map((status) => (
        <Tabs.Content key={status.key} value={status.key}>
          <BoardColumn
            label={status.label}
            tasks={tasks.filter((t) => t.status === status.key)}
            droppableId={status.key}
          />
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};
