import Modal from '@mui/material/Modal';
import styles from './EditChartModal.module.css';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import type { IChart } from '@/models/IChart';
import Paper from '@mui/material/Paper';
import { SelectChartType } from '../SelectChartType/SelectChartType';
import { SelectChartColor } from '../SelectChartColor/SelectChartColor';
import { ChangeChartName } from '../ChangeChartName/ChangeChartName';
import Button from '@mui/material/Button';
import { useAppDispatch } from '@/hooks/redux';
import { updateChart } from '@/store/reducers/ActionCreators';
import { roboto } from '@/theme/theme';

type EditChartModalProps = {
	chart: IChart;
};

export const EditChartModal = ({ chart }: EditChartModalProps) => {
	const dispatch = useAppDispatch();
	const [name, setName] = useState(chart.name);
	const [type, setType] = useState(chart.type);
	const [color, setColor] = useState(chart.color);

	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleSave = () => {
		dispatch(
			updateChart({
				id: chart.id,
				name: name,
				type: type,
				color: color,
			})
		);
		handleClose();
	};

	return (
		<div>
			<EditIcon onClick={handleOpen} className={styles.icon} />
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Paper className={styles.container}>
					<h2 className={roboto.className}>Edit chart</h2>
					<ChangeChartName name={name} setName={setName} />
					<div className={styles.colorAndTypeContainer}>
						<SelectChartType type={type} setType={setType} />
						<SelectChartColor color={color} setColor={setColor} />
					</div>
					<div className={styles.buttonsContainer}>
						<Button onClick={handleSave}>Save</Button>
						<Button onClick={handleClose} color='error'>
							Cancel
						</Button>
					</div>
				</Paper>
			</Modal>
		</div>
	);
};
