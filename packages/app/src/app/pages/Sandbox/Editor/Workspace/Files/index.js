import * as React from 'react';
import { inject, observer } from 'mobx-react';

import DirectoryEntry from './DirectoryEntry/index';
import WorkspaceItem from '../WorkspaceItem';

import EditIcons from './DirectoryEntry/Entry/EditIcons';

class Files extends React.Component {
<<<<<<< HEAD
    createModule = () => {
        // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
        this.directory.onCreateModuleClick();
    };

    createDirectory = () => {
        // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
        this.directory.onCreateDirectoryClick();
    };

    render() {
        const store = this.props.store;
        const sandbox = store.editor.currentSandbox;

        const openedModulesByUsers = {};

        // if (store.live.isLive) {
        //   store.live.usersMetadata.forEach(user => {
        //     openedModulesByUsers[user.currentModuleShortid] =
        //       openedModulesByUsers[user.currentModuleShortid] || [];
        //     openedModulesByUsers[user.currentModuleShortid].push(user.color);
        //   });
        // }

        return (
            <WorkspaceItem
                defaultOpen
                keepState
                title="Files"
                actions={
                    <EditIcons hovering onCreateFile={this.createModule} onCreateDirectory={this.createDirectory} />
                }
            >
                <DirectoryEntry
                    root
                    innerRef={(el) => {
                        this.directory = el;
                    }}
                    title={sandbox.title || 'Project'}
                    openedModulesByUsers={openedModulesByUsers}
                    depth={-1}
                    id={null}
                    shortid={null}
                />
            </WorkspaceItem>
        );
    }
=======
  createModule = () => {
    // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
    this.directory.onCreateModuleClick();
  };

  createDirectory = () => {
    // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
    this.directory.onCreateDirectoryClick();
  };

  render() {
    const store = this.props.store;
    const sandbox = store.editor.currentSandbox;

    return (
      <WorkspaceItem
        defaultOpen
        keepState
        title="Files"
        actions={
          <EditIcons
            hovering
            onCreateFile={this.createModule}
            onCreateDirectory={this.createDirectory}
          />
        }
      >
        <DirectoryEntry
          root
          innerRef={el => {
            this.directory = el;
          }}
          title={sandbox.title || 'Project'}
          changedModuleShortids={store.editor.changedModuleShortids}
          sandboxId={sandbox.id}
          sandboxTemplate={sandbox.template}
          mainModuleId={store.editor.mainModule.id}
          modules={sortBy(sandbox.modules.toJS(), 'title')}
          directories={sortBy(sandbox.directories.toJS(), 'title')}
          isInProjectView={store.preferences.isInProjectView}
          currentModuleId={store.editor.currentModule.id}
          errors={store.editor.errors}
          corrections={store.editor.corrections}
          depth={-1}
          id={null}
          shortid={null}
        />
      </WorkspaceItem>
    );
  }
>>>>>>> Fixed bug related to changedModuleIds
}

export default inject('signals', 'store')(observer(Files));
