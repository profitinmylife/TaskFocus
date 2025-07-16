import type { TaskCardProps } from './lib';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Text, Box } from '@radix-ui/themes';

const TaskCard = ({ task }: TaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({ id: task.id });

  return (
    <Box
      ref={setNodeRef}
      style={{
        marginBottom: 12,
        minHeight: 120,
        maxHeight: 120,
        height: 120,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        padding: 14,
        color: '#fff',
        transform: CSS.Transform.toString(transform),
        transition: 'transform 0.18s cubic-bezier(0.22,1,0.36,1)',
        cursor: 'grab',
        userSelect: 'none',
        willChange: 'transform',
        zIndex: isDragging ? 10 : 'auto',
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'var(--accent-9)',
        borderRadius: '8px',
        backgroundColor: 'bg-white',
        gap: '8px',
      }}
      {...attributes}
      {...listeners}
    >
      <Box style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}>
        <Text
          as="div"
          weight="bold"
          mb="1"
          style={{
            fontSize: 16,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            color: 'var(--gray-12, #18181b)',
          }}
        >
          {task.title}
        </Text>
        {task.description && (
          <Text
            as="div"
            color="gray"
            mb="1"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              fontSize: 13,
              lineHeight: 1.3,
              minHeight: 30,
              color: 'var(--gray-12, #18181b)',
            }}
          >
            {task.description}
          </Text>
        )}
      </Box>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 2,
        }}
      >
        {task.assignee && (
          <Text
            as="div"
            size="1"
            style={{
              fontWeight: 500,
              color: 'var(--accent-12, #7c3aed)',
              fontSize: 12,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            @{task.assignee}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default TaskCard;
