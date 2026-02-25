# Implementation Plan - Fixing Meeting Columns and Data Fetching

This plan outlines the steps to resolve syntax errors in the `columns.tsx` file and ensure the backend procedure provides the necessary relational data (Agent info and calculated Duration).

## 1. Backend: Update `getMany` Procedure
The current `getMany` procedure only selects columns from the `meetings` table. We need to include the joined `agents` data and calculate the `duration`.

- **File**: `src/modules/meetings/server/procsdures.ts`
- **Changes**:
    - Update the `.select()` block in `getMany` to include:
        - `...getTableColumns(meetings)`
        - `agent: agents`
        - `duration: sql<number>`EXTRACT(EPOCH FROM (ended_at - started_at))`.as("duration")`
    - Ensure `.innerJoin(agents, eq(meetings.agentId, agents.id))` is present (verified already added by user).

## 2. Frontend: Fix Syntax in `columns.tsx`
The `columns.tsx` file contains typos and syntax errors that will prevent compilation.

- **File**: `src/modules/meetings/ui/components/columns.tsx`
- **Changes**:
    - **`formatDuration` function**:
        - Add missing comma before the options object.
        - Fix typo `unitss` to `units`.
    - **Imports**: Remove the trailing comma in the `cn` import.
    - **Data Access**: Ensure `row.original.agent.name` is used (user already updated this in the latest save, but verified).

## 3. Verification
- **Frontend**: Check if the "Meeting Name" column correctly displays the Agent's name and avatar.
- **Duration**: Verify the "Duration" badge displays "X minutes/seconds" instead of "No duration".
- **Types**: Ensure `MeetingGetMany` type automatically updates via tRPC inference once the procedure changes.

## Proposed Execution Order
1. Modify `src/modules/meetings/server/procsdures.ts` first so the types are available.
2. Modify `src/modules/meetings/ui/components/columns.tsx` to fix the helper function and imports.
